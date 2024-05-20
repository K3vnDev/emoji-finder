/* eslint-disable react/prop-types */
export function Categories({ searchCategory }) {
  const categories = [
    {
      name: 'Emotions',
      file: 'emotions.svg'
    },
    {
      name: 'People & Body',
      file: 'peoplenbody.svg',
    },
    {
      name: 'Animals & Nature',
      file: 'animalsnnature.svg',
    },
    {
      name: 'Food & Drink',
      file: 'foodndrinks.svg',
    },
    {
      name: 'Travel & Places',
      file: 'travelnplaces.svg',
    },
    {
      name: 'Activities',
      file: 'activities.svg',
    },
    {
      name: 'Objects',
      file: 'objects.svg',
    },
    {
      name: 'Symbols',
      file: 'symbols.svg',
    },
    {
      name: 'Flags',
      file: 'flags.svg',
    },
  ]
    
  return (
    <section className='categories-wrapper'>
    {
      categories.map((category, index) => (
        <Category
        key={index} name={category.name} index={index}
        img_url={`src/assets/categoriesIcons/${category.file}`}
        searchCategory={searchCategory}
        />
      ))
    }
    </section>
  )
}

function Category({ searchCategory, name, img_url, index }) {
  const handleClick = () => {
    searchCategory(index)
  }

  return (
    <div className='category'>
      <img src={img_url} alt={name} title={name} onClick={handleClick} />
    </div>
  )
}
