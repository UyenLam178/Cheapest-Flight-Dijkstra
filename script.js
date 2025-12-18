// Biến toàn cục
let flightPath = null;
const cityMarkers = {};
window.allFlightLines = [];
let lastResult = null; // Lưu kết quả tìm kiếm cuối cùng

// Khởi tạo bản đồ
const map = L.map('map').setView([10, 20], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 18
}).addTo(map);

// Thêm marker thành phố
Object.entries(cities).sort((a,b) => a[0].localeCompare(b[0])).forEach(([name, latlng]) => {
    const marker = L.circleMarker(latlng, {
        radius: 10,
        fillColor: "#d32f2f",
        color: "#fff",
        weight: 3,
        fillOpacity: 0.9,
        className: 'city-marker-normal'
    }).addTo(map)
      .bindPopup(`<b>${name}</b><br>Quốc gia: ${countries[name]}<br>Lat: ${latlng[0]}<br>Lng: ${latlng[1]}`)
      .on('mouseover', function(e) {
          const layer = e.target;
          layer.setStyle({
              radius: 18,
              fillColor: "#FFFF00",
              color: "#ffffff",
              weight: 6,
              fillOpacity: 1,
              className: 'city-marker-hover'
          });
          layer.bringToFront();
          layer.openPopup();
      })
      .on('mouseout', function(e) {
          const layer = e.target;
          layer.setStyle({
              radius: 10,
              fillColor: "#d32f2f",
              color: "#fff",
              weight: 3,
              fillOpacity: 0.9,
              className: 'city-marker-normal'
          });
          layer.closePopup();
      });

    cityMarkers[name] = marker;

    if (document.getElementById("start")) {
        document.getElementById("start").add(new Option(name));
    }
    if (document.getElementById("end")) {
        document.getElementById("end").add(new Option(name));
    }

    function updateAllDropdowns() {
    const startSelect = document.getElementById("start");
    const activeContinents = Array.from(document.querySelectorAll('.continent-filter:checked'))
        .map(cb => cb.nextSibling.textContent.trim());
    
    const currentStart = startSelect.value;
    startSelect.innerHTML = "";

    Object.keys(cities).sort().forEach(name => {
        if (activeContinents.includes(continents[name])) {
            startSelect.add(new Option(name));
        }
    });

    if (Array.from(startSelect.options).some(opt => opt.value === currentStart)) {
        startSelect.value = currentStart;
    }

    filterDestinationCities(); // Cập nhật luôn ô "Đến"
}
});

// Lọc marker theo châu lục
function filterMarkersByContinent(continentName, isChecked) {
    // 1. Ẩn/Hiện Marker thành phố
    for (const cityName in cityMarkers) {
        if (continents[cityName] === continentName) {
            const marker = cityMarkers[cityName];
            isChecked ? map.addLayer(marker) : map.removeLayer(marker);
        }
    }

    // 2. Ẩn/Hiện các đường bay 
    window.allFlightLines.forEach(line => {
        const cityA = line.options.fromCity;
        const cityB = line.options.toCity;

        // Chỉ hiển thị đường bay nếu CẢ HAI thành phố đầu và cuối đều đang được hiển thị
        if (map.hasLayer(cityMarkers[cityA]) && map.hasLayer(cityMarkers[cityB])) {
            map.addLayer(line);
        } else {
            map.removeLayer(line);
        }
    });

    // 3. Cập nhật lại dropdowns
    updateAllDropdowns();

    if (flightPath) flightPath.bringToFront();
}

// Khởi tạo bộ lọc
document.addEventListener('DOMContentLoaded', () => {
    const continentsList = [...new Set(Object.values(continents))]; 
    
    const filterControlsDiv = document.createElement('div');
    filterControlsDiv.id = 'filter-controls';

    const filterBar = document.createElement('div');
    filterBar.className = 'filter-bar';
    filterBar.innerHTML = '<h3>Lọc theo Châu lục</h3>';

    continentsList.forEach(continent => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" checked class="continent-filter" 
                   onchange="filterMarkersByContinent('${continent}', this.checked)"> ${continent}
        `;
        filterBar.appendChild(label);
    });

    filterControlsDiv.appendChild(filterBar);

    const searchContainer = document.querySelector('.search-container');
    const mapDiv = document.getElementById('map');
    
    if (searchContainer && mapDiv) {
        searchContainer.parentNode.insertBefore(filterControlsDiv, mapDiv);
    }
});

// Cập nhật hiển thị
function updateRouteDisplay() {
    const startSelect = document.getElementById("start");
    const endSelect = document.getElementById("end");
    if (document.getElementById("fromCity")) {
        document.getElementById("fromCity").textContent = startSelect ? startSelect.value || "?" : "?";
    }
    if (document.getElementById("toCity")) {
        document.getElementById("toCity").textContent = endSelect ? endSelect.value || "?" : "?";
    }
}

// Lọc danh sách thành phố đến dựa trên loại chuyến bay
function filterDestinationCities() {
    const startSelect = document.getElementById("start");
    const endSelect = document.getElementById("end");
    const flightType = document.querySelector('input[name="flightType"]:checked').value;
    
    if (!startSelect || !endSelect) return;
    
    const startCity = startSelect.value;
    const currentEndCity = endSelect.value;
    
    // Lấy danh sách các châu lục đang ĐƯỢC CHỌN (checked)
    const activeContinents = Array.from(document.querySelectorAll('.continent-filter:checked'))
        .map(cb => cb.nextSibling.textContent.trim());

    endSelect.innerHTML = "";
    
    // Lọc danh sách thành phố dựa trên:
    // 1. Loại chuyến bay (nội địa/quốc tế)
    // 2. Châu lục phải đang hiển thị (nằm trong activeContinents)
    const availableCities = Object.keys(cities).filter(city => {
        const isDifferentCity = city !== startCity;
        const isContinentVisible = activeContinents.includes(continents[city]);
        
        let isTypeMatch = true;
        if (flightType === "domestic") {
            isTypeMatch = countries[city] === countries[startCity];
        } else if (flightType === "international") {
            isTypeMatch = countries[city] !== countries[startCity];
        }

        return isDifferentCity && isContinentVisible && isTypeMatch;
    }).sort();

    availableCities.forEach(city => {
        endSelect.add(new Option(city));
    });

    if (availableCities.includes(currentEndCity)) {
        endSelect.value = currentEndCity;
    }
    
    updateRouteDisplay();
}

if (document.getElementById("start")) {
    document.getElementById("start").onchange = () => {
        filterDestinationCities();
        updateRouteDisplay();
    };
}
if (document.getElementById("end")) {
    document.getElementById("end").onchange = updateRouteDisplay;
}

// Thêm event listener cho radio buttons
document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="flightType"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', filterDestinationCities);
    });
});

// Vẽ đường bay tối ưu
function drawFlight(result) {
    window.allFlightLines.forEach(line => map.removeLayer(line));
    
    if (flightPath) map.removeLayer(flightPath);

    const latlngs = result.path.map(c => cities[c]);

    map.setView(latlngs[0], 5, {
        animate: true,
        duration: 1.5
    });

    setTimeout(() => {
        flightPath = L.polyline(latlngs, {
            color: '#e91e63',
            weight: 6,
            opacity: 0.85,
            dashArray: '12, 12'
        }).addTo(map);

        setTimeout(() => {
            map.fitBounds(flightPath.getBounds().pad(0.3), {
                animate: true,
                duration: 1.5
            });
        }, 500);
    }, 1500);
}

// Hiển thị nút "In Hóa Đơn"
function showPrintButton(result) {
    lastResult = result;
    const printBtn = document.getElementById("printBillBtn");
    printBtn.style.display = "block";
}

// Hiển thị hóa đơn
function showBill() {
    if (!lastResult) return;
    
    const billContainer = document.getElementById("billContainer");
    billContainer.style.display = "block";

    // Mã hóa đơn
    const billCode = "BAY-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById("billId").textContent = billCode;

    // Ngày
    const today = new Date();
    const billDate = today.getDate().toString().padStart(2, '0') + '/' +
                     (today.getMonth() + 1).toString().padStart(2, '0') + '/' +
                     today.getFullYear();
    document.getElementById("billDate").textContent = billDate;

    // Loại chuyến bay
    const flightTypeLabel = document.getElementById("flightTypeLabel");
    flightTypeLabel.textContent = lastResult.flightType === "domestic" ? "Chuyến bay nội địa" : "Chuyến bay quốc tế";
    flightTypeLabel.style.color = lastResult.flightType === "domestic" ? "#4caf50" : "#2196f3";

    // Đường bay
    document.getElementById("route").innerHTML = lastResult.path
        .map(city => `<span class="city">${city}</span>`)
        .join(' → ');

    // Tổng chi phí
    const total = lastResult.cost ?? 0;
    document.getElementById("totalCost").innerHTML = `<strong>$${total}</strong>`;

    // Chi tiết các chặng
    const legsDiv = document.getElementById("legs");
    legsDiv.innerHTML = "";
    for (let i = 0; i < lastResult.path.length - 1; i++) {
        const fromCity = lastResult.path[i];
        const toCity = lastResult.path[i + 1];
        const cost = graph[fromCity][toCity] || graph[toCity][fromCity];
        const div = document.createElement("div");
        div.className = "leg";
        div.innerHTML = fromCity + " → " + toCity + "<span style='float:right;'>$" + cost + "</span>";
        legsDiv.appendChild(div);
    }
}

// Đóng hóa đơn
function closeBill() {
    const billContainer = document.getElementById("billContainer");
    billContainer.style.display = "none";
}

// Tìm đường bay
function findPath() {
    const startSelect = document.getElementById("start");
    const endSelect = document.getElementById("end");
    
        if (!startSelect || !endSelect) {
        alert("Thiếu phần tử HTML. Vui lòng kiểm tra lại!");
        return;
    }

    const start = startSelect.value;
    const end = endSelect.value;

    if (!start || !end) {
        alert("Vui lòng chọn điểm đi và điểm đến!");
        return;
    }
    
    if (start === end) {
        alert("Điểm đi và điểm đến phải khác nhau!");
        return;
    }

    if (!map.hasLayer(cityMarkers[start]) || !map.hasLayer(cityMarkers[end])) {
        alert("Một trong hai thành phố thuộc châu lục đang bị ẩn!");
        return;
    }

    const result = dijkstra(start, end);
    
    if (!result) {
        alert("Không có đường bay giữa hai thành phố này!");
        return;
    }

    // Xác định loại chuyến bay
    const startCountry = countries[start];
    const endCountry = countries[end];
    const isDomestic = startCountry === endCountry;
    result.flightType = isDomestic ? "domestic" : "international";

    updateRouteDisplay();
    drawFlight(result);
    showPrintButton(result);
}

// Vẽ tất cả đường bay
function drawAllFlights() {
    if (flightPath) map.removeLayer(flightPath);

    window.allFlightLines.forEach(line => map.removeLayer(line));
    window.allFlightLines = []; 

    for (const fromCity in graph) {
        for (const toCity in graph[fromCity]) {
            const cost = graph[fromCity][toCity]; 
            
            if (cities[fromCity] && cities[toCity]) {
                const latlngs = [cities[fromCity], cities[toCity]];

                const route = L.polyline(latlngs, {
                    color: '#d32f2f',
                    weight: 2,
                    opacity: 0.6,
                    interactive: true,
                    fromCity: fromCity,
                    toCity: toCity
                }).addTo(map);

                route.bindTooltip(`$${cost} | ${fromCity} → ${toCity}`, {
                    permanent: false, 
                    direction: 'auto',
                    sticky: true 
                });

                window.allFlightLines.push(route);
            }
        }
    }
}

// Xóa kết quả
function clearResult() {
    const printBtn = document.getElementById("printBillBtn");
    printBtn.style.display = "none";
    
    closeBill();
    
    if (flightPath) {
        map.removeLayer(flightPath);
        flightPath = null;
    }
    
    lastResult = null;
    drawAllFlights(); 

    map.setView([10, 20], 2);
    
    for (const marker of Object.values(cityMarkers)) {
        if (!map.hasLayer(marker)) {
            marker.addTo(map);
        }
    }
    
    const checkboxes = document.querySelectorAll('.continent-filter');
    checkboxes.forEach(cb => {
    // Kích hoạt lại logic lọc dựa trên trạng thái hiện tại của checkbox
    filterMarkersByContinent(cb.nextSibling.textContent.trim(), cb.checked);
    });
}

// Khởi động ban đầu
if (document.getElementById("start")) {
    document.getElementById("start").value = "Ha Noi";
}
if (document.getElementById("end")) {
    document.getElementById("end").value = "Napoli";
}
filterDestinationCities(); // Lọc danh sách ban đầu
updateRouteDisplay();
drawAllFlights();

// Cho phép kéo hóa đơn
let isDragging = false;
let currentX = 0;
let currentY = 0;
let initialX = 0;
let initialY = 0;
let xOffset = 0;
let yOffset = 0;

const billContainer = document.querySelector('.bill-container');
const bill = document.querySelector('.bill');

if (billContainer && bill) {
    bill.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (e.target.tagName === 'BUTTON') return;

        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        isDragging = true;
        bill.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;

            billContainer.style.transform = `translate(${currentX}px, ${currentY}px)`;
            billContainer.style.top = '50%';
            billContainer.style.left = '50%';
        }
    }

    function dragEnd(e) {
        isDragging = false;
        bill.style.cursor = 'move';
    }
}