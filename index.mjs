export const handler = async (event) => {
  const response = await fetch(
    'https://triumf-tenis.next.genez.io/api/update/'
  );
  const responseJson = await response.json();
  console.log(JSON.stringify(responseJson));
  await fetch('https://triumf-tenis.next.genez.io/');
  return {
    statusCode: 200,
    body: 'ok',
  };
};
