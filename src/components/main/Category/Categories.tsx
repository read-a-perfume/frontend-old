import {
  CategoryBox,
  CategoryImage,
  CategorySection,
  CategorySpan,
} from '../Headers/Headers.style'
import {CategoriesProps} from './Categories.interface'
import {data} from './data'

const Categories = () => {
  return (
    <CategorySection>
      {data.map((el: CategoriesProps) => (
        <CategoryBox key={el.id}>
          <CategoryImage src={el.image} alt={el.name} />
          <CategorySpan>{el.name}</CategorySpan>
        </CategoryBox>
      ))}
    </CategorySection>
  )
}

export default Categories
