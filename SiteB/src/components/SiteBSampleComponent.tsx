const SiteBSampleComponent = ({ children }) => {
    return (
        <div>
            <p>This component is rendered from Site B's component</p>
            {children}
        </div>
    );
}

export default SiteBSampleComponent;