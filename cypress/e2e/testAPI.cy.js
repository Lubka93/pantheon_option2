describe('REST API testing of https://jsonplaceholder.typicode.com/', () => {


    it('GET all posts from user with id 1 to verify connection', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts?userId=1').then((response) => {
            const responseBody = response.body;

            // Assertions
            expect(response.status).to.eq(200);
            expect(responseBody.length).to.eql(10);

            responseBody.forEach((item) => {
                expect(item.userId).to.eql(1);
            });
        });
    });
    

    it('POST request to add a new post for userId=1', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'Test1',
                body: 'A new post for user with userId 1',
                userId: 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const responseBody = response.body;

            // Assertions
            expect(response.status).to.eq(201);
            expect(responseBody).to.include({
                title: 'Test1',
                body: 'A new post for user with userId 1',
                userId: 1
            });
        });
    });

    it('UPDATE request for post with Id=1', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'Title was updated',
                body: 'Post 1 body was also updated',
                userId: 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const responseBody = response.body;

            // Assertions
            expect(response.status).to.eq(200);
            expect(responseBody).to.include({
                title: 'Title was updated',
                body: 'Post 1 body was also updated',
                userId: 1
            });
        });
    });

    it('PATCH request for post with Id=1', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'Title was patched'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const responseBody = response.body;

            // Assertions
            expect(response.status).to.eq(200);
            expect(responseBody).to.include({
                title: 'Title was patched',
                userId: 1,
                id: 1
            });
        });
    });

    it('DELETE request for post with Id=1', () => { 
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            const responseBody = response.body;

            // Assertions
            expect(response.status).to.eq(200);
            expect(responseBody).to.eql({});
        });
    });

});
