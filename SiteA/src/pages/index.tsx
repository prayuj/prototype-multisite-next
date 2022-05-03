import { GetStaticProps } from 'next';
import HelloWorld from '@common/components/HelloWorld';
import SiteASampleComponent from '@components/SiteASampleComponent';

const Home = ({ name }) => {
    return (
        <SiteASampleComponent>
            <HelloWorld name={name} />
        </SiteASampleComponent>
    )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            name: 'Site A'
        }
    }
}