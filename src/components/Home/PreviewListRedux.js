const initialState = {
    loading: true,
    error: false,
    articleList: [],
}

const LOAD_ARTICLES = "LOAD_ARTICLES"
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS"
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR"

export const loadArticles = () => {
    // debugger 
    // alert(1)
    return {
        types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
        url: 'api/articles.json',
    }
}

export default (state=initialState, action) => {
    // debugger
    switch(action.type) {
        case LOAD_ARTICLES: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }

        case LOAD_ARTICLES_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                articleList: action.payload,
            }
        }

        case LOAD_ARTICLES_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }

        default:
            return state;
    }
}