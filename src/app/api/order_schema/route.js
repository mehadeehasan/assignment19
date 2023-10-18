import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Single Insert Data

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
    try {
      const prisma = new PrismaClient();
      let reqBody  = await req.json();
      let result   = await prisma.order.create({ data: reqBody });
      
const aggregations = await prisma.order.aggregate({
      _avg: {
        grandTotal: true,
      },
      _count: {
        grandTotal: true,
      },
      _max: {
        grandTotal: true,
      },
      _sum: {
        grandTotal: true,
      },
      orderBy: {
        grandTotal: "asc",
      },
      take: 10,
    });

    console.log("Average grand total:" + aggregations._avg.grandTotal);
    console.log("Total count of grand total:" + aggregations._count.grandTotal);
    console.log("Maximum value of grand total:" + aggregations._max.grandTotal);
    console.log("Minimum value of grand total:" + aggregations._sum.grandTotal);
      
      return NextResponse.json({ status: "Success", result: result });
    } catch (err) {
      return NextResponse.json({ status: "Fail", result: err.toString() });
    }
}

 //Read All Data

export async function GET(req, res) {
    BigInt.prototype.toJSON = function () {
      return this.toString();
    };
try {
    const prisma = new PrismaClient();
    let result = await prisma.order.findMany();

    return NextResponse.json({ status: "Success", result: result });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}

// Update Single Data

export async function PUT(req, res) {
    BigInt.prototype.toJSON = function () {
      return this.toString();
    };
try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.order.update({
      where: reqBody,
      data: {
        "metaTitle": "Councilors"
      },
    });
    return NextResponse.json({ status: "Success", result: result });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}

//Delete  single Data.

export async function DELETE(req, res) {
    BigInt.prototype.toJSON = function () {
      return this.toString();
    };
try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
   
   const deleteOrder=prisma.Comment.delete({
            where:{id:1}
        })
  
    const result=await prisma.$transaction([deleteOrder])
  
    return NextResponse.json({ status: "Success", result: result });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}

