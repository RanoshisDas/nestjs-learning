import {Body, Controller, Get, Param, Post,NotFoundException} from '@nestjs/common';
import {CreateMessagesDto} from "./dto/creat-messages.dto";
import {MessagesService} from "./messages.service";

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService){}

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessagesDto ) {
       return this.messagesService.createMessage(body.content);
    }

    @Get('/:id')
    async getMessages(@Param('id') id: string) {
        const message=await this.messagesService.findOne(id);
        if(!message) {
            throw new NotFoundException('message not found');
        }
        return message;
    }
}
