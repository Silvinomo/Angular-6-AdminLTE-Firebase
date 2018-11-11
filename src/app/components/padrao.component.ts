import { OnInit } from "@angular/core";

import { configuration } from "../configuration";
import { Usuario } from "../models/usuario.modal";
import { UF } from "../models/shared/ufs.model";


export class PadraoComponent implements OnInit {
    public urlRoute: string;
    public VUFs: UF[];
    public keyToDelete: string;
    public EstaAlterando: boolean = false;

    public UsuarioAtual: Usuario;

    public NameProjeto = configuration.projectName.firstName
        + ' ' + configuration.projectName.lastName;

    constructor(private databaseService?: any) {
        if (databaseService) {
            this.urlRoute = '/' + this.databaseService.getUrl();
            this.VUFs = this.databaseService.getUFs();
        }
    }

    ngOnInit() {
        
    }

}