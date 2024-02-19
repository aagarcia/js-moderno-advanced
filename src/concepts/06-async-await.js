import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f9f80b591f499df32';

    try {
        const hero1 = await findHeroe(id1);
        const hero2 = await findHeroe(id2);

        element.innerHTML = `${hero1.name} / ${hero2.name}`;
    }
    catch (error) {
        element.innerHTML = error;
    }
};

const findHeroe = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero) {
        throw `Hero with id ${id} not found`;
    }
    return hero;
};