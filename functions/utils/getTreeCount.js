exports.clacTreeCount = (orders) => {
    let treeCount = 0;
    let product = 0;
    let treesPerMonth = 0;

    orders.forEach((order) => {
        if (order.line_items) {
            order.line_items.forEach((lineItem) => {
                if (
                    lineItem.product_id === 5985588871362 ||
                    lineItem.name === '30 Years To Carbon Free'
                ) {
                    treesPerMonth = 2;
                    treeCount += treesPerMonth;
                    product = 30;
                } else if (
                    lineItem.product_id === 5985587167426 ||
                    lineItem.name === '10 Years To Carbon Free'
                ) {
                    treesPerMonth = 6;
                    treeCount += treesPerMonth;
                    product = 10;
                } else {
                    treesPerMonth = 11;
                    treeCount += treesPerMonth;
                    product = 5;
                }
            });
        }
    });
    return { product, treeCount, treesPerMonth };
};
