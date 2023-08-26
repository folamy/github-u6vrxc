export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    console.log(body)
    // TODO: Handle body and add user
    return { body };
  } catch (error) {
    console.log(error)
    return error
  }
});
