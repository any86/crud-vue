export function walkTree<Node extends { children?: Node[] }>(nodes: Node[], each: (node: Node) => void) {
    const stack: Node[] = [];
    _filter(nodes, each, stack);
    while (stack.length > 0) {
        const node = stack.pop()!;
        if (node.children?.length) {
            _filter(node.children, each, stack);
        }
    }

    function _filter(nodes: Node[], each: (node: Node) => void, stack: Node[]) {
        let { length } = nodes
        for (let i = 0; i < length; i++) {
            const node = nodes[i];
            if (void 0 === each(node)) {
                nodes.splice(i, 1);
                length--;
                i--;
            } else {
                stack.push(node);
            }
        }
    }
}