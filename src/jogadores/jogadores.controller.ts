import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Post()
  criarAtulizarJogador() {
    return JSON.stringify({
      nome: 'Jadiê',
    });
  }
}
