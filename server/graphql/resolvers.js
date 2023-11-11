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
        createUser: async(_, {username, password}) =>{
            const user = await prisma.user.create({
                data:{
                    username,
                    password,
                },
            });
            return user;
        },
        createReport : async(_, {reporterName, injuryDateTime, userId}) =>{
           const report = await prisma.report.create({
            data:{
                reporterName,
                injuryDateTime,
                userId
            },
           });
           return id;
        },
        createInjury : async(_, {bodyArea, description, reportId}) =>{
            const injury = await prisma.injury.create({
                data:{
                    bodyArea,
                    description,
                    reportId,
                },
            });
            return injury;
        },
    },
};

