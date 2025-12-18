function dijkstra(startName, endName) {
    const dist = {}, prev = {};
    Object.keys(graph).forEach(c => dist[c] = Infinity);
    dist[startName] = 0;
    const unvisited = new Set(Object.keys(graph));

    while (unvisited.size) {
        let u = null;
        for (let city of unvisited) {
            if (!u || dist[city] < dist[u]) u = city;
        }
        if (!u) break;
        unvisited.delete(u);
        
        for (let [v, cost] of Object.entries(graph[u] || {})) {
            const alt = dist[u] + cost;
            if (alt < dist[v]) {
                dist[v] = alt;
                prev[v] = u;
            }
        }
    }
    
    if (dist[endName] === Infinity) return null;

    const path = [];
    let cur = endName;
    while (cur) {
        path.unshift(cur);
        cur = prev[cur];
    }
    
    return { path, cost: dist[endName] };
}
