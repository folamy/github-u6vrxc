export default defineEventHandler(async (event) => {
  try {
    // const body = await readBody(event)
    // eslint-disable-next-line no-console
    console.log('body');
    // TODO: Handle body and add user
    return { updated: true };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});
