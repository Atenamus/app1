import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restraunt',
  title: 'Restraunt',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restraunt Name',
      type: 'string',
      validation:(Rule)=>Rule.required(),
    }),
    defineField({
      name: 'short_descrip',
      title: 'short_descrip',
      type: 'string',
      validation:(Rule)=>Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'lat',
      type: 'number',
    }),
    defineField({
      name: 'lon',
      title: 'lon',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'address',
      type: 'string',
      validation:(Rule)=>Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'rating',
      type: 'number',
      validation:(Rule)=>Rule.required().min(1).max(5).error("please enter a valid rating"),
    }),
    defineField({
      name: 'type',
      title: 'category',
      type: 'reference',
      to:[{type :"category"}],
      validation:(Rule)=>Rule.required(),
    }),
    defineField({
      name: 'dishes',
      title: 'dishes',
      type: 'array',
      of:[{type:"reference",to:[{type:"dish"}]}]
    }),
  ]
})
