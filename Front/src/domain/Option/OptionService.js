export default class OptionService {
    constructor(resource) {
        this._resource = resource('option{/id}{?q,p}');
    }

    get(id) {
        return this._resource.get({
            id
        }).then(res => res.json());
    }

    listAll(page, query) {
        return this._resource.query({
            p: page,
            q: query
        }).then(res => res.json());
    }

    save(option) {
        return this._resource.save(option);
    }

    edit(id, option) {
        return this._resource.update({
            id
        }, option);
    }

    delete(id) {
        return this._resource.delete({
            id
        });
    }
}