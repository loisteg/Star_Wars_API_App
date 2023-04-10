import uuid from "react-native-uuid";

const useStarWarsAPI = () => {
  const getPeople = async () => {
    const response = await getAllPeople();

    return response.map(_transformHero);
  };

  function getAllPeople(url = "https://swapi.dev/api/people/", people = []) {
    return new Promise((resolve, reject) =>
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            throw `${response.status}: ${response.statusText}`;
          }
          response
            .json()
            .then((data) => {
              people = people.concat(data.results);

              if (data.next) {
                getAllPeople(data.next, people).then(resolve).catch(reject);
              } else {
                resolve(people);
              }
            })
            .catch(reject);
        })
        .catch(reject)
    );
  }

  const _transformHero = (hero) => {
    return {
      birthYear: hero["birth_year"],
      gender: hero.gender,
      name: hero.name,
      skinColor: hero["skin_color"],
      url: hero.url,
      created: hero.created,
      height: hero.height,
      id: uuid.v1(),
      favorite: false,
    };
  };

  return { getPeople };
};

export default useStarWarsAPI;
