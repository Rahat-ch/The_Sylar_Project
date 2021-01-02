/* eslint-disable no-underscore-dangle */
import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
)

const table = base(process.env.AIRTABLE_TABLE_NAME)

export default async (req, res) => {
    try {
        const [month, date, year] = new Date().toLocaleDateString('en-US').split('/')
        const { name, stateId, link, image } = req.body
        const newRecord = {
            fields: {
                name,
                stateId: [stateId],
                link,
                description: 'replace with description before approval',
                posted: `${year}-${month}-${date}`,
                image,
                isApproved: false,
            },
        }
        const createdRecords = await table.create([newRecord])
        res.statusCode = 200
        res.json({
            msg:
                'Your resource has been recieved, once approved it will be available on The Sylar Project',
            createdRecords,
            status: `${res.statusCode}`,
        })
    } catch (err) {
        res.statusCode = 500
        console.log(err)
        res.json({ msg: 'Something went wrong', status: `${res.statusCode}` })
    }
}
