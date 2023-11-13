import java.util.Scanner
/**
 * You can edit, run, and share this code.
 * play.kotlinlang.org
 */
// Crie uma classe para simulação de um caixa de banco
// Métodos:
// Deposiotar dinheiro (1)
// Sacar dinheiro (2)
// Tirar um extrato (3)
// Transferir dinheiro entre contas (4)
// Sair(0)
// Atributos:
// CodBanco
// CodAgencia
// NumConta
// CPF
// TotCred
// TotDeb
// Saldo
//



fun main(args:Array<String>) {
    class Conta (val codbanco: Int, val codagencia: Int, val numconta: Int, var totcred: Double, var totdeb: Double, var saldo: Double) {

        fun depositar(valor: Double) {
            totcred+=valor
            saldo+=valor
            println("Valor de $valor deposito. Total de Créditos: $totcred.Saldo: $saldo")
        }

        fun sacar(valor: Double) {
            if (valor<=saldo) {
                println("Saque nao realizado. Saldo de $saldo inferior ao valor de $valor")
            } else {
                totdeb+=valor
                saldo -=valor
                println("Sacado $valor. Total Debito: $totdeb. Saldo: $saldo")
            }
        }

        fun tirarextrato() {
            println("Total de Creditos: $totcred Total de Debitos: $totdeb  Saldo Atual: $saldo")
        }

        fun transferir(codbancodest: Int, codagenciadest: Int, numcontadest: Int, valordest: Double) {
            if (valordest > saldo) {
                println("Transferencia nao realizada.Saldo de $saldo inferior ao valor de $valordest")
            }
            else {
                totdeb += valordest
                saldo -= valordest
                println("Transferencia nao realizada.Saldo de $saldo inferior ao valor de $valordest")
            }

        }
    }

    fun menu() {
        val minhaConta = Conta(1, 5000, 18000, 0.0, 0.0, 0.0)
        val scanner = Scanner(System.`in`)
        var opt = 99
        while(opt != 0){
            println()
            println("Opções:")
            println()
            println("1. Depositar")
            println("2. Sacar")
            println("3. Tirar extrato")
            println("4. Transferir")
            println()
            println("0.Sair")
            println()
            println("Selecione uma opçâo: ")
            println()
            opt=scanner.nextLine().trim().toInt()
            if(opt==1) {
                println("Digite valor a ser depositado: ")
                var valor = scanner.nextLine().trim().toDouble()
            }
            if(opt==2) {
                println("Digite valor a ser sacado: ")
                var valor = scanner.nextLine().trim().toDouble()
            }
            if(opt==3) {
                minhaConta.tirarextrato()
            }
            if(opt==4) {
               println("Digite o codigo do banco: ")
               var codbancodest = scanner.nextLine().trim().toInt()
               println("Digite o codigo da agencia: ")
               var codagenciadest = scanner.nextLine().trim().toInt()
               println("Digite o numero da conta: ")
               var numcontadest = scanner.nextLine().trim().toInt()
               println("Digite o valor a transferir: ")
               var valordest = scanner.nextLine().trim().toDouble()
              minhaConta.transferir(codbancodest,codagenciadest, numcontadest,valordest)

            }

        }

    }
    menu()

}
