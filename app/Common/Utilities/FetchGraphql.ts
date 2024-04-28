export default async function fetchGraphql(query: string) {
   const wpurl: any = process.env.WP_ENDPOINT;
   try {
      const data = await fetch(wpurl, {
         method: "POST",
         headers: {
            "Content-type": "Application/json",
         },
         body: JSON.stringify({
            query: query,
         }),
         next: {
            revalidate: 90,
         },
      });
      if (data.status > 300) {
         throw new Error(`Ошибка запроса: ${data.status}`);
      }
      return data.json();
   } catch (err: any) {
      alert("Ошибка загрузки данных, попробуйте обновить страницу");
      console.error(err);
   }
}
