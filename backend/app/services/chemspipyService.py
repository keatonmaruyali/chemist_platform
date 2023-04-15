from chemspipy import ChemSpider

from backend.app.environment import CHEMSPI_TOKEN


class ChemspipyService():
    def __init__(self):
        self.client = ChemSpider(CHEMSPI_TOKEN)

    def get_compound(self, compound_id: int):
        return self.client.get_compound(compound_id)

    def search_compound_name(self, compound_name: str):
        compounds = self.client.search(compound_name)
        cleaned_compounds = [
            {
                'record_id': res._record_id,
                # 'image': res.image,
                'smiles':  res._details['smiles'],
                'formula':  res._details['formula'],
                'averageMass':  res._details['averageMass'],
                'molecularWeight': res._details['molecularWeight'],
                'monoisotopicMass': res._details['monoisotopicMass'],
                'nominalMass': res._details['nominalMass'],
                'commonName':  res._details['commonName'],
                'referenceCount':  res._details['referenceCount'],
                'dataSourceCount':  res._details['dataSourceCount'],
                'pubMedCount':  res._details['pubMedCount'],
                'rscCount':  res._details['rscCount'],
                'mol2D':  res._details['mol2D'],
                'mol3D':  res._details['mol3D'],
            }
            for res in list(compounds)
        ]
        return cleaned_compounds
