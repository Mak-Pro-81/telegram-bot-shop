export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (res.status === 404) {
      throw new Error("Something went wrong!");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
