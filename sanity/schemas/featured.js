import {defineField, defineType} from 'sanity'
export default defineType({
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: ' Featured category name',
        type: 'string',
        validation:(Rule)=>Rule.required(),
      }),
      defineField({
        name: 'short_des',
        title: 'short_description',
        type: 'string',
        validation:(Rule)=>Rule.max(200),
      }),
      defineField({
        name: 'restraunt',
        title: 'Restraunt',
        type: 'array',
       of:[{type:"reference",to:[{type:"restraunt"}]}]
      }),
    ],
  })