import { Request, Response } from 'express';

export class HomeController {

    async index(req: Request, res: Response, ){
        try {
            res.render("site/index")
        } catch (error) {
           console.log(error);
            
        }
    }
    async about(req: Request, res: Response, ){
        try {
            res.render("site/about")
        } catch (error) {
           console.log(error);
            
        }
    }
    async services(req: Request, res: Response, ){
        try {
            res.render("site/services")
        } catch (error) {
           console.log(error);
            
        }
    }
    async portfolio(req: Request, res: Response, ){
        try {
            res.render("site/portfolio")
        } catch (error) {
           console.log(error);
            
        }
    }
    async pricing(req: Request, res: Response, ){
        try {
            res.render("site/pricing")
        } catch (error) {
           console.log(error);
            
        }
    }
    async blog(req: Request, res: Response, ){
        try {
            res.render("site/blog")
        } catch (error) {
           console.log(error);
            
        }
    }
    async contact(req: Request, res: Response, ){
        try {
            res.render("site/contact")
        } catch (error) {
           console.log(error);
            
        }
    }
    async blog_single(req: Request, res: Response, ){
        try {
            res.render("site/blog-single")
        } catch (error) {
           console.log(error);
            
        }
    }
    async page_notFound(req: Request, res: Response, ){
        try {
            res.render("site/404")
        } catch (error) {
           console.log(error);
            
        }
    }
    
    
    
}