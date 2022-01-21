
module.exports = async ({ options, resolveVariable }) => {
    const data = await resolveVariable('file(./test.yml)')
    return data
}