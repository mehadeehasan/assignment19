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
      let result   = await prisma.product.create({ data: reqBody });

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
    let result = await prisma.product.findMany();

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
    let result = await prisma.product.update({
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
    let result = await prisma.product.delete({
      where: reqBody,
    });
    return NextResponse.json({ status: "Success", result: result });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}

