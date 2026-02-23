import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateMessagesDto} from "./dto/creat-messages.dto";

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {
        return "Hello";
    }

    @Post()
    createMessage(@Body() body: CreateMessagesDto ) {
        console.log(body);
    }

    @Get('/:id')
    getMessages(@Param('id') id: string) {
   console.log(id);
    }
}
