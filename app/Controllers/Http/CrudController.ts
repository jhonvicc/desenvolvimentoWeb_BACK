import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class CrudController {
    createResource(request: HttpContextContract) {
        return 'createResource';
    }

    deleteResource(request: HttpContextContract) {
        return 'deleteResource';
    }

    updateResource(request: HttpContextContract) {
        return 'updateResource';
    }

    listResource(request: HttpContextContract) {
        return 'listResource';
    }
}