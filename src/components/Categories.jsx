/* eslint-disable react/prop-types */
export function Categories({ getEmojisByCategory }) {
  const categories = [
    {
      name: 'Emotions',
      img_url: 'emotions.png',
    },
    {
      name: 'People & Body',
      img_url: 'peoplenbody.png',
    },
    {
      name: 'Animals & Nature',
      img_url: 'animalsnnature.png',
    },
    {
      name: 'Food & Drink',
      img_url: 'foodndrinks.png',
    },
    {
      name: 'Travel & Places',
      img_url: 'travelnplaces.png',
    },
    {
      name: 'Activities',
      img_url: 'activities.png',
    },
    {
      name: 'Objects',
      img_url: 'objects.png',
    },
    {
      name: 'Symbols',
      img_url: 'symbols.png',
    },
    {
      name: 'Flags',
      img_url: 'flags.png',
    },
  ]
    
  return (
    <section className='categories-wrapper'>
    {
      categories.map((category, index) => (
        <Category
        key={index} name={category.name} index={index}
        img_url={`./src/assets/icons/categories/${category.img_url}`}
        getEmojisByCategory={getEmojisByCategory}
        />
      ))
    }
    </section>
  )
}

function Category({ getEmojisByCategory, name, img_url, index }) {
  const handleClick = () => {
    getEmojisByCategory(index)
  }

  return (
    <div className='category'>
      <img src={img_url} alt={name} title={name} onClick={handleClick} />
    </div>
  )
}
