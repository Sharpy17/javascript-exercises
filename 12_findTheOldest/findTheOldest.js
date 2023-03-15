const findTheOldest = (array) => {
    const currentYear = (new Date()).getFullYear();
    const oldest = array
                    .sort((aGuy, bGuy) => {
                        if (!aGuy.yearOfDeath && bGuy.yearOfDeath) {
                            const firstLife = currentYear - aGuy.yearOfBirth;
                            const secondLife = bGuy.yearOfDeath - bGuy.yearOfBirth;
                            return (firstLife > secondLife ? -1 : 1);
                        } else if (aGuy.yearOfDeath && !bGuy.yearOfDeath) {
                        const firstLife = aGuy.yearOfDeath - aGuy.yearOfBirth;
                        const secondLife = currentYear - bGuy.yearOfBirth;
                        return (firstLife > secondLife ? -1 : 1);
                        } else if (!aGuy.yearOfDeath && !bGuy.yearOfBirth) {
                            const firstLife = currentYear - aGuy.yearOfBirth;
                            const secondLife = currentYear - bGuy.yearOfBirth;
                            return (firstLife > secondLife ? -1 : 1);
                        } else {
                            const firstLife = aGuy.yearOfDeath - aGuy.yearOfBirth;
                            const secondLife = bGuy.yearOfDeath - bGuy.yearOfBirth;
                            return (firstLife > secondLife ? -1 : 1);
                        }
                    })
                    .find((guy) => (guy.name));
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
