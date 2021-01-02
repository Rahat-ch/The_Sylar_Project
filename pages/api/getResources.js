/* eslint-disable no-underscore-dangle */
import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
)

const table = base(process.env.AIRTABLE_TABLE_NAME)

export default async (req, res) => {
    try {
        const records = await table.select({}).all()
        res.statusCode = 200
        const resourceMap = {}
        records.forEach((state) => {
            const stateKey = state._rawJson.fields['State (from stateId)'][0]
            const { isApproved } = state._rawJson.fields
            if (isApproved && resourceMap[stateKey]) {
                resourceMap[stateKey].push(state._rawJson.fields)
            } else if (isApproved) {
                resourceMap[stateKey] = [state._rawJson.fields]
            }
        })
        res.json(resourceMap)
    } catch (err) {
        res.statusCode = 500
        res.json({ errMsg: 'Something went wrong' })
    }
}

// for local uncomment everything below and comment everything above if you do not have access to airtable

// import usData from '../../data/usData'

// export default function handler(req, res) {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify(usData))
// }
