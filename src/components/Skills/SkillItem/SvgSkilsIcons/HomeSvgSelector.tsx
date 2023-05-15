import React from 'react';


type HomeSvgSelectorType = {
    id: string | undefined
}

export const HomeSvgSelector = (props: HomeSvgSelectorType) => {
    const {id} = props

    switch (id) {
        case 'js' : {
            return <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
        }
        case 'react': {
            return <svg height="70" viewBox="175.7 78 490.6 436.9" width="70" xmlns="http://www.w3.org/2000/svg">
                <g fill="#61dafb">
                    <path
                        d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/>
                    <circle cx="420.9" cy="296.5" r="45.7"/>
                </g>
            </svg>
        }
        case 'ts': {
            return <svg height="70" viewBox="0 0 640 640" width="70" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 0h640v640h-640z" fill="#017acb"/>
                <path d="m307.3 237h30.7v53h-83v235.8l-2.2.6c-3 .8-42.5.8-51-.1l-6.8-.6v-235.7h-83v-53l26.3-.3c14.4-.2 51.4-.2 82.2 0s69.8.3 86.8.3zm234.3 263.8c-12.2 12.9-25.3 20.1-47.1 26-9.5 2.6-11.1 2.7-32.5 2.6s-23.1-.1-33.5-2.8c-26.9-6.9-48.6-20.4-63.4-39.5-4.2-5.4-11.1-16.6-11.1-18 0-.4 1-1.3 2.3-1.9s4-2.3 6.2-3.6 6.2-3.7 8.9-5.1 10.5-6 17.3-10.1 13-7.4 13.7-7.4 2 1.4 3 3.1c6 10.1 20 23 29.9 27.4 6.1 2.6 19.6 5.5 26.1 5.5 6 0 17-2.6 22.9-5.3 6.3-2.9 9.5-5.8 13.3-11.6 2.6-4.1 2.9-5.2 2.8-13 0-7.2-.4-9.2-2.4-12.5-5.6-9.2-13.2-14-44-27.6-31.8-14.1-46.1-22.5-57.7-33.8-8.6-8.4-10.3-10.7-15.7-21.2-7-13.5-7.9-17.9-8-38-.1-14.1.2-18.7 1.7-23.5 2.1-7.2 8.9-21.1 12-24.6 6.4-7.5 8.7-9.8 13.2-13.5 13.6-11.2 34.8-18.6 55.1-19.3 2.3 0 9.9.4 17 .9 20.4 1.7 34.3 6.7 47.7 17.4 10.1 8 25.4 26.8 23.9 29.3-1 1.5-40.9 28.1-43.5 28.9-1.6.5-2.7-.1-4.9-2.7-13.6-16.3-19.1-19.8-32.3-20.6-9.4-.6-14.4.5-20.7 4.7-6.6 4.4-9.8 11.1-9.8 20.4.1 13.6 5.3 20 24.5 29.5 12.4 6.1 23 11.1 23.8 11.1 1.2 0 26.9 12.8 33.6 16.8 31.2 18.3 43.9 37.1 47.2 69.5 2.4 24.4-4.5 46.7-19.5 62.5z" fill="#fff"/></svg>
        }
        case 'git': {
            return <svg xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} width="70" height="70" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        }
        case 'redux': {
            return <svg width="70" height="70" viewBox="0 0 256 244" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#764ABC"/></svg>
        }
        case 'html': {
            return <svg fill="none" height="70" width="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>
        }
        case 'css': {
            return <svg fill="none" height="70" width="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>
        }
        case 'rest' : {
            return <svg height="70" fill={'#ffffff'} width="70" className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M975.657143 96.914286l-48.457143-48.457143c-1.828571-1.828571-4.114286-2.628571-6.514286-2.628572s-4.685714 0.914286-6.514285 2.628572l-86.971429 86.971428a227.737143 227.737143 0 0 0-128.114286-39.2c-58.514286 0-117.028571 22.285714-161.714285 66.971429L420.914286 279.657143a9.177143 9.177143 0 0 0 0 12.914286L731.428571 603.085714c1.828571 1.828571 4.114286 2.628571 6.514286 2.628572 2.285714 0 4.685714-0.914286 6.514286-2.628572l116.457143-116.457143c78.742857-78.857143 88-200.8 27.771428-289.714285l86.971429-86.971429c3.542857-3.657143 3.542857-9.485714 0-13.028571zM805.828571 431.657143l-67.885714 67.885714-213.485714-213.485714 67.885714-67.885714c28.457143-28.457143 66.4-44.228571 106.742857-44.228572 40.342857 0 78.171429 15.657143 106.742857 44.228572 28.457143 28.457143 44.228571 66.4 44.228572 106.742857 0 40.342857-15.771429 78.171429-44.228572 106.742857z m-217.371428 120a9.177143 9.177143 0 0 0-12.914286 0L499.428571 627.771429 396.228571 524.571429l76.228572-76.228572c3.542857-3.542857 3.542857-9.371429 0-12.914286L430.857143 393.828571a9.177143 9.177143 0 0 0-12.914286 0L341.714286 470.057143l-49.142857-49.142857a8.971429 8.971429 0 0 0-6.514286-2.628572c-2.285714 0-4.685714 0.914286-6.514286 2.628572L163.2 537.371429c-78.742857 78.857143-88 200.8-27.771429 289.714285l-86.971428 86.971429a9.177143 9.177143 0 0 0 0 12.914286l48.457143 48.457142c1.828571 1.828571 4.114286 2.628571 6.514285 2.628572s4.685714-0.914286 6.514286-2.628572l86.971429-86.971428c38.514286 26.171429 83.314286 39.2 128.114285 39.2 58.514286 0 117.028571-22.285714 161.714286-66.971429l116.457143-116.457143c3.542857-3.542857 3.542857-9.371429 0-12.914285l-49.142857-49.142857 76.228571-76.228572c3.542857-3.542857 3.542857-9.371429 0-12.914286l-41.828571-41.371428zM431.657143 805.828571a150.08 150.08 0 0 1-106.742857 44.228572c-40.342857 0-78.171429-15.657143-106.742857-44.228572a150.08 150.08 0 0 1-44.228572-106.742857c0-40.342857 15.657143-78.171429 44.228572-106.742857l67.885714-67.885714 213.485714 213.485714-67.885714 67.885714z"/></svg>
        }
        case 'union-test': {
            return <svg aria-hidden="true" data-prefix="fas" data-icon="check"
                        className="svg-inline--fa fa-check fa-w-16" xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2.4990000000000094 62.599000000000004 516.998 386.80300000000005" width="70"
                        height="70">
                <path fill={'#627be9'}
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>
            </svg>
        }
        case 'material-ui': {
            return <svg viewBox="0 0 600 476.30000000000007" xmlns="http://www.w3.org/2000/svg" width="70" height="70"><path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" fill="#00b0ff"/><path d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z" fill="#0081cb"/><path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff"/><path d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z" fill="#0081cb"/></svg>
        }
    }

    return (
        <>
        </>
    )
};

export default HomeSvgSelector;