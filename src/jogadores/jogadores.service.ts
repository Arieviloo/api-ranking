import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador-interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];
  private readonly logger = new Logger(JogadoresService.name);
  async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`criaJogadorDto: ${JSON.stringify(criaJogadorDto)}`);
    await this.criar(criaJogadorDto);
  }

  private criar(criaJogadorDto: CriarJogadorDto): void {
    const { nome, celular, email } = criaJogadorDto;
    const jogador: Jogador = {
      _id: uuidv4(),
      nome,
      celular,
      email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.google.com.br/foto123.jpg',
    };
    this.jogadores.push(jogador);
  }
}
