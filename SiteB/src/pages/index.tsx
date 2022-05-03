import { GetStaticProps } from 'next';
import SiteBSampleComponent from '@components/SiteBSampleComponent';
import HelloWorld from '@common/components/HelloWorld';

const Home = ({ name }) => {
    return (
        <SiteBSampleComponent>
            <HelloWorld name={name} />
        </SiteBSampleComponent>
    )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            name: 'Site B'
        }
    }
}