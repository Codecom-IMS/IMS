function DateFormat()
{
    const dateobj = new Date();
    const day = dateobj.getDate();
    const month = dateobj.getMonth() + 1;
    const year = dateobj.getFullYear();
    const date = `${year}-${month}-${day}`
    return date
}
module.exports = DateFormat