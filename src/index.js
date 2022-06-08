class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find(boardItem => boardItem.name === board.name)) {
            throw error;
        }
        board.onsite = true;
        this.boards.push(board);
    }

    findBoardByName(name) {
        return this.boards.find(board => board.name === name);
    }
}

class Board {
    constructor(name) {
        if (name === null || name ==='') {
            throw error;
        }
        this.name = name;
        this.onsite = false;
        this.articles = [];
    }

    publish(article) {
        if (this.onsite === false) {
            throw error;
        }

        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        article.onboard = true;
        this.articles.push(article);
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor({subject, content, author}) {
        if (subject === null || subject === '' || content === null || content === '' || author === null || author === '') {
            throw error;
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.onboard = false;
        this.comments = [];
    }

    reply(comment) {
        if (this.onboard === false) {
            throw error;
        }
        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);
    }

    getAllComments() {
        return this.comments;
    }

}

class Comment {
    constructor({content, author}) {
        if (content === null || content === '' || author === null || author === '') {
            throw error;
        }
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
