const URL = "https://www.athlify.gr";

const getCompanies = async () => {
  try {
    const data = await fetch(`${URL}/user/companies`);
    return data.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};

export { getCompanies };
