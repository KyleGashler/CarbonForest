export default function calcTreesPlanted(date, product) {
    const progressTime = Date.now() - new Date(date).getTime();
    const progressInDays = progressTime / (1000 * 3600 * 24);

    if (parseInt(product) >= 30) {
        return progressInDays * (11 / 30);
    } else if (parseInt(product) >= 16) {
        return progressInDays * (6 / 30);
    } else if (parseInt(product) >= 6) {
        return progressInDays * (2 / 30);
    } else {
        return 0;
    }
}