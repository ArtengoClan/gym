import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePge = page.toLowerCase().replace(/ /g, '') as SelectedPage
  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePge ? 'text-primary-500' : ''}
            transition duration-500 hover:text-primary-300
        `}
        href={`#${lowerCasePge}`}
        onClick={() => setSelectedPage(lowerCasePge)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link