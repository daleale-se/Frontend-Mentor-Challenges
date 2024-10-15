export const detailsLoader = async ({ params }) => {
    const { name } = params;
  
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw new Response("Country Not Found", { status: 404 });
    }
  
    // const data = await response.json();

    // return {country:data[0]}
    
};