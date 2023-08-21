import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation:(Rule)=>Rule.required(),
    }),
    defineField({
      name:"short_desc",
      title:"short description",
      type:"string",
      validation:(Rule)=>Rule.max(200),
    }),
    defineField({
      name: 'price',
      title: 'price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'image of the dish',
      type: 'image',
    }),
  ],
})
