exports.clacTreeCount = (orders) => {
    let treeCount = 0;
    let product = 0;

    orders.forEach((order) => {
        if (order.line_items) {
            order.line_items.forEach((lineItem) => {
                if (
                    lineItem.product_id === 5985588871362 ||
                    lineItem.name === '30 Years To Carbon Free'
                ) {
                    treeCount += 2;
                    product = 30;
                } else if (
                    lineItem.product_id === 5985587167426 ||
                    lineItem.name === '10 Years To Carbon Free'
                ) {
                    treeCount += 6;
                    product = 10;
                } else {
                    treeCount += 11;
                    product = 5;
                }
            });
        }
    });
    return { product, treeCount };
};