const initialState = {
    loading: true,
    error: false,
    articleList: [],
}

const LOAD_ARTICLES = "LOAD_ARTICLES"
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS"
const LOAD_ARTICLES_FALSE = "LOAD_ARTICLES_FALSE"

export const loadArticles = () => {
    return {
        types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_FALSE],
        url: 'api/articles.json',
    }
}

export default (state=initialState, action) => {
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
            }
        }

        case LOAD_ARTICLES_FALSE: {
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