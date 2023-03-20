// const { ethers } = require('ethers')
const { TypedDataUtils } = require('ethers-eip712')

const SIGNING_DOMAIN_NAME = 'LNWEBWORKS'
const SIGNING_DOMAIN_VERSION = '1'

class SignWallet {
	constructor(contractAddress, signer) {
		this.contractAddress = contractAddress
		this.signer = signer

		this.types = {
			EIP712Domain: [
				{ name: 'name', type: 'string' },
				{ name: 'version', type: 'string' },
				{ name: 'chainId', type: 'uint256' },
				{ name: 'verifyingContract', type: 'address' },
			],
			NFTVoucher: [
				{ name: 'tokenId', type: 'uint256' },
				{ name: 'nftAmount', type: 'uint256' },
				{ name: 'price', type: 'uint256' },
				{ name: 'startDate', type: 'uint256' },
				{ name: 'endDate', type: 'uint256' },
				{ name: 'maker', type: 'address' },
				{ name: 'nftAddress', type: 'address' },
				{ name: 'tokenURI', type: 'string' },
			],
		}
	}

	async getDomain() {
		const chainId = await this.signer.getChainId()
		const domain = {
			name: SIGNING_DOMAIN_NAME,
			version: SIGNING_DOMAIN_VERSION,
			chainId: chainId, // for testing in rinkeby change it to 4
			verifyingContract: this.contractAddress,
		}

		return domain
	}

	async getSignature(NFTVoucher) {
		const domain = await this.getDomain()
		const typedData = {
			types: this.types,
			primaryType: 'NFTVoucher',
			domain: domain,
			message: NFTVoucher,
		}

		const digest = TypedDataUtils.encodeDigest(typedData)
		// const digestHex = ethers.utils.hexlify(digest)

		const signature = await this.signer.signMessage(digest)
		return signature
	}
}

module.exports = SignWallet