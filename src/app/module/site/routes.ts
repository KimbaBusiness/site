import { Router } from "express";
import { HomeController } from "./controller/homeController";
const homeController= new HomeController()

const homeRouter = Router()
homeRouter.get("",homeController.index.bind(homeController))
homeRouter.get("/about",homeController.about.bind(homeController))
homeRouter.get("/services",homeController.services.bind(homeController))
homeRouter.get("/portfolio",homeController.portfolio.bind(homeController))
homeRouter.get("/pricing",homeController.pricing.bind(homeController))
homeRouter.get("/blog",homeController.blog.bind(homeController))
homeRouter.get("/contact",homeController.contact.bind(homeController))
homeRouter.get("/blog-single",homeController.blog_single.bind(homeController))
homeRouter.get("/page-notFound",homeController.page_notFound.bind(homeController))

export default homeRouter;