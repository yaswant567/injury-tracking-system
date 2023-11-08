import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const resolvers = {
    Query:{
        user(_, argId){
            return prisma.report.findUniqu({
                where:{id:{argId}}
            })
        },
        report(_, argId){
            return prisma.report.findUniqu({
                where:{id:{argId}}
            })
        },
        injury(_, argId){
            return prisma.report.findUniqu({
                where:{id:{argId}}
            })
        },
        allUsers(){
            return prisma.user.findMany();
        },
        allReports(){
            return prisma.report.findMany();
        },
        allInjuries(){
            return prisma.injury.findMany();
        }
    },
    Mutation:{
        createUser: (_, {username, password}) =>{
            return prisma.user.create({data: {username, password}})
        }
    }
}