import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {
        const {value, done} = await heroGenerator.next();
        isFinished = done;
        if (isFinished) break;
        element.innerHTML = value;
    } while (!isFinished);
};

async function* getHeroGenerator() {
    for(const heroe of heroes) {
        await sleep();
        yield heroe.name;
    }
    return 'no hay mas';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
}