function depthFirstSearch(graph, startNode, targetNode) {
    visited = [startNode]
    node = [startNode]
    path = []


    path = nodeChecker(graph, startNode, targetNode, visited, node, path)
    if (path.includes(targetNode)){return path}
    return [];
}
function nodeChecker(graph, startNode, targetNode, visited, node, path){

    let check = node.pop()
    visited.push(check)
    path.push(check)
    if (check == targetNode){return path}

    for(let edge in graph[check])
    {

        let next = graph[check][edge]
        if (!visited.includes(next)){
            node.push(next)
            nodeChecker(graph, startNode, targetNode,visited,node,path)
        }
        if (path.includes(targetNode)){return path}
        if (path.length > 1) path.pop()
    }
    
    return path
}
