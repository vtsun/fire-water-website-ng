import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



export interface Reference {
  title: string;
  authors: string;
  year: string;
  citation: string;
}

const ELEMENT_DATA: Reference[] = [
  { title: 'Watershed‐scale vegetation, water quantity, and water quality responses to wildfire in the southern Appalachian mountain region, United States', authors: 'Caldwell, P.V., Elliott, K.J., Liu, N., Vose, J.M., Zietlow, D.R. and Knoepp, J.D.', year: '2020', citation: 'Caldwell, P.V., Elliott, K.J., Liu, N., Vose, J.M., Zietlow, D.R. and Knoepp, J.D., 2020. Watershed‐scale vegetation, water quantity, and water quality responses to wildfire in the southern Appalachian mountain region, United States. Hydrological Processes, 34(26), pp.5188-5209.' },
  { title: 'Modeling Post‐Wildfire Hydrologic Response: Review and Future Directions for Applications of Physically Based Distributed Simulation', authors: 'Ebel, B.A., Shephard, Z.M., Walvoord, M.A., Murphy, S.F., Partridge, T.F. and Perkins, K.S.', year: '2023', citation: "Ebel, B.A., Shephard, Z.M., Walvoord, M.A., Murphy, S.F., Partridge, T.F. and Perkins, K.S., 2023. Modeling Post‐Wildfire Hydrologic Response: Review and Future Directions for Applications of Physically Based Distributed Simulation. Earth's Future, 11(2), p.e2022EF003038." },
  { title: "Burned forests impact water supplies", authors: "Hallema, D.W., Sun, G., Caldwell, P.V., Norman, S.P., Cohen, E.C., Liu, Y., Bladon, K.D. and McNulty, S.G.", year: "2018", citation: "Hallema, D.W., Sun, G., Caldwell, P.V., Norman, S.P., Cohen, E.C., Liu, Y., Bladon, K.D. and McNulty, S.G., 2018. Burned forests impact water supplies. Nature communications, 9(1), p.1307." },
  { title: "Wildfire effects on water quality in forest catchments: A review with implications for water supply", authors: "Smith, H.G., Sheridan, G.J., Lane, P.N., Nyman, P. and Haydon, S.", year: "2011", citation: "Smith, H.G., Sheridan, G.J., Lane, P.N., Nyman, P. and Haydon, S., 2011. Wildfire effects on water quality in forest catchments: A review with implications for water supply. Journal of Hydrology, 396(1-2), pp.170-192." },
  { title: "Wildfire induces changes in receiving waters: A review with considerations for water quality management", authors: "Paul, M.J., LeDuc, S.D., Lassiter, M.G., Moorhead, L.C., Noyes, P.D. and Leibowitz, S.G.", year: "2022", citation: "Paul, M.J., LeDuc, S.D., Lassiter, M.G., Moorhead, L.C., Noyes, P.D. and Leibowitz, S.G., 2022. Wildfire induces changes in receiving waters: A review with considerations for water quality management. Water Resources Research, 58(9), p.e2021WR030699." },
  { title: "PFHydro: A new watershed-scale model for post-fire runoff simulation", authors: "Wang, J., Stern, M.A., King, V.M., Alpers, C.N., Quinn, N.W., Flint, A.L. and Flint, L.E.", year: "2020", citation: "Wang, J., Stern, M.A., King, V.M., Alpers, C.N., Quinn, N.W., Flint, A.L. and Flint, L.E., 2020. PFHydro: A new watershed-scale model for post-fire runoff simulation. Environmental Modelling & Software, 123, p.104555." },
  { title: "Economic Analysis of Wildfire Impacts to Water Quality: a Review", authors: "Wibbenmeyer, M., Sloggy, M.R. and Sánchez, J.J.", year: "2023", citation: "Wibbenmeyer, M., Sloggy, M.R. and Sánchez, J.J., 2023. Economic Analysis of Wildfire Impacts to Water Quality: a Review. Journal of Forestry, p.fvad012." },
  { title: "Wildfire and the future of water supply", authors: "Bladon, K.D., Emelko, M.B., Silins, U. and Stone, M.", year: "2014", citation: "Bladon, K.D., Emelko, M.B., Silins, U. and Stone, M., 2014. Wildfire and the future of water supply. Environ. Sci. Technol. 2014, 48, 16, 8936–8943." },
  { title: "Planning for an uncertain future: Restoration to mitigate water scarcity and sustain carbon sequestration", authors: "Brantley, S.T., Vose, J.M., Wear, D.N. and Band, L.", year: "2017", citation: "Brantley, S.T., Vose, J.M., Wear, D.N. and Band, L., 2017. Planning for an uncertain future: Restoration to mitigate water scarcity and sustain carbon sequestration. Ecological restoration and management of longleaf pine forests, pp.291-310." },
  { title: "Forested watersheds provide the highest water quality among all land cover types, but the benefit of this ecosystem service depends on landscape context", authors: "Caldwell, P.V., Martin, K.L., Vose, J.M., Baker, J.S., Warziniack, T.W., Costanza, J.K., Frey, G.E., Nehra, A. and Mihiar, C.M.", year: "2023", citation: "Caldwell, P.V., Martin, K.L., Vose, J.M., Baker, J.S., Warziniack, T.W., Costanza, J.K., Frey, G.E., Nehra, A. and Mihiar, C.M., 2023. Forested watersheds provide the highest water quality among all land cover types, but the benefit of this ecosystem service depends on landscape context. Science of The Total Environment, 882, p.163550." },
  { title: "Southern Forest Outlook: Water", authors: "Caldwell, P., J. Vose and others", year: "2023", citation: "Caldwell, P., J. Vose and others. 2023. Southern Forest Outlook: Water. SRS GTR (In review)." },
  { title: "Wildfires are Threatening Municipal Water Supplies", authors: "Chow, A.T.S., Karanfil, T. and Dahlgren, R.A.", year: "2021", citation: "Chow, A.T.S., Karanfil, T. and Dahlgren, R.A., 2021. Wildfires are Threatening Municipa l Water Supplies. Eos Science News by AGU." },
  { title: "Modeling soil erosion and sediment transport from fires in forested watersheds of the South Carolina Piedmont", authors: "Crumbley, T., Ge Sun, Steve McNulty", year: "2007", citation: "Crumbley, T., Ge Sun, Steve McNulty. 2007. Modeling soil erosion and sediment transport from fires in forested watersheds of the South Carolina Piedmont" },
  { title: "Mapping firescapes for wild and prescribed fire management: a landscape classification approach", authors: "Gould NP, Nepal S, Lee DC, Pomara LY", year: "2023", citation: "Gould NP, Nepal S, Lee DC, Pomara LY (2023) Mapping firescapes for wild and prescribed fire management: a landscape classification approach. (In prep)." },
  { title: "Fire Ecology and Management: Past, Present, and Future of US Forested Ecosystems", authors: "Greenberg CH, Collins B", year: "2021", citation: "Greenberg CH, Collins B (2021) Fire Ecology and Management: Past, Present, and Future of US Forested Ecosystems. Springer Cham" },
  { title: "Forest restoration and hydrology", authors: "Jones, J., Ellison, D., Ferraz, S., Lara, A., Wei, X. and Zhang, Z.", year: "2022", citation: "Jones, J., Ellison, D., Ferraz, S., Lara, A., Wei, X. and Zhang, Z., 2022. Forest restoration and hydrology. Forest Ecology and Management, 520, p.120342." },
  { title: "Future Wildfire Trends, Impacts, and Mitigation Options in the Southern United States", authors: "Liu Y, Prestemon JP, Goodrick SL et al", year: "2014", citation: "Liu Y, Prestemon JP, Goodrick SL et al (2014) Future Wildfire Trends, Impacts, and Mitigation Options in the Southern United States. In: Vose J. M. andKlepzig K. D. (eds), Climate Change Adaptation and Mitigation Management Options: A Guide for Natural Resource Managers in Southern Forest Ecosystems. Boca Raton, FL, pp. 85-126" },
  { title: "Quantifying the role of National Forest System and other forested lands in providing surface drinking water supply for the conterminous United States", authors: "Liu, N., Caldwell, P.V., Miniat, C.F., Sun, G., Duan, K. and Carlson, C.P.", year: "2022", citation: "Liu, N., Caldwell, P.V., Miniat, C.F., Sun, G., Duan, K. and Carlson, C.P., 2022. Quantifying the role of National Forest System and other forested lands in providing surface drinking water supply for the conterminous United States. Gen. Tech. Rep. WO-100. Washington, DC: US Department of Agriculture, Forest Service, Washington Office., 100." },
  { title: "Forests to Faucets 2.0: connecting forests, water, and communities", authors: "Mack, Erika; Lilja, Rebecca; Claggett, Sally; Sun, Ge; Caldwell, Peter", year: "2022", citation: "Mack, Erika; Lilja, Rebecca; Claggett, Sally; Sun, Ge; Caldwell, Peter. 2022. Forests to Faucets 2.0: connecting forests, water, and communities. Gen. Tech. Rep. WO-99. Washington, DC: U.S. Department of Agriculture, Forest Service, Washington Office. 32 p. https://doi.org/10.2737/WO-GTR-99." },
  { title: "Fifteen essential science advances needed for effective restoration of the world's forest landscapes", authors: "Marshall, A.R., Waite, C.E., Pfeifer, M., Banin, L.F., Rakotonarivo, S., Chomba, S., Herbohn, J., Gilmour, D.A., Brown, M. and Chazdon, R.L.", year: "2023", citation: "Marshall, A.R., Waite, C.E., Pfeifer, M., Banin, L.F., Rakotonarivo, S., Chomba, S., Herbohn, J., Gilmour, D.A., Brown, M. and Chazdon, R.L., 2023. Fifteen essential science advances needed for effective restoration of the world's forest landscapes. Philosophical Transactions of the Royal Society B, 378(1867), p.20210065." },
  { title: "Wildfire induces changes in receiving waters: A review with considerations for water quality management", authors: "Paul, M.J., LeDuc, S.D., Lassiter, M.G., Moorhead, L.C., Noyes, P.D. and Leibowitz, S.G.", year: "2022", citation: "Paul, M.J., LeDuc, S.D., Lassiter, M.G., Moorhead, L.C., Noyes, P.D. and Leibowitz, S.G., 2022. Wildfire induces changes in receiving waters: A review with considerations for water quality management. Water Resources Research, 58(9), p.e2021WR030699." },
  { title: "Southern Forest Outlook: Fire", authors: "Pomara, L.Y., Nicholas P. Gould, Sandhya Nepal, Kristen D. Emmett, Scott L. Goodrick, and Danny C", year: "In review", citation: "Pomara, L.Y., Nicholas P. Gould, Sandhya Nepal, Kristen D. Emmett, Scott L. Goodrick, and Danny C. Lee. Southern Forest Outlook: Fire. SRS GTR (In review)." },
  { title: "Simulated longleaf pine (Pinus palustris Mill.) restoration increased streamflow—A case study in the Lower Flint River Basin", authors: "Qi, J., Brantley, S.T. and Golladay, S.W.", year: "2022", citation: "Qi, J., Brantley, S.T. and Golladay, S.W., 2022. Simulated longleaf pine (Pinus palustris Mill.) restoration increased streamflow—A case study in the Lower Flint River Basin. Ecohydrology, 15(1), p.e2365." },
  { title: "Spatial wildfire occurrence data for the United States, 1992-2020", authors: "Short, Karen C", year: "2022", citation: "Short, Karen C. 2022. Spatial wildfire occurrence data for the United States, 1992-2020 [FPA_FOD_20221014]. 6th Edition. Fort Collins, CO: Forest Service Research Data Archive. https://doi.org/10.2737/RDS-2013-0009.6" },
  { title: "Forest landscape restoration: state of play", authors: "Stanturf JA, Mansourian S", year: "2020", citation: "Stanturf JA, Mansourian S. 2020 Forest landscape restoration: state of play. R. Soc. Open Sci. 7:201218. (DOI: 10.1098/rsos.201218)" },
  { title: "Water quantity and quality at the urban–rural interface", authors: "Sun, G. and Lockaby, B.G.", year: "2012", citation: "Sun, G. and Lockaby, B.G., 2012. Water quantity and quality at the urban–rural interface. Urban–rural interfaces: Linking people and nature, pp.29-48." },
  { title: "Impacts of climate change and variability on water resources in the Southeast USA", authors: "Sun, G., Arumugam, S., Caldwell, P.V., Conrads, P.A., Covich, A.P., Cruise, J., Feldt, J., Georgakakos, A.P., McNider, R.T., McNulty, S.G. and Marion, D.A.", year: "2013", citation: "Sun, G., Arumugam, S., Caldwell, P.V., Conrads, P.A., Covich, A.P., Cruise, J., Feldt, J., Georgakakos, A.P., McNider, R.T., McNulty, S.G. and Marion, D.A., 2013. Impacts of climate change and variability on water resources in the Southeast USA. In Climate of the Southeast United States: Variability, change, impacts, and vulnerability (pp. 210-236). Washington, DC: Island Press/Center for Resource Economics." },
  { title: "Water quantity and quality. In Southern Forest Science: Past, Present, and Future", authors: "Sun, G., Riedel, M., Rhett Jackson, R., Kolka, D.A. and Shepard, J.", year: "2004", citation: "Sun, G., Riedel, M., Rhett Jackson, R., Kolka, D.A. and Shepard, J., 2004. Water quantity and quality. In Southern Forest Science: Past, Present, and Future. H. Michael Rauscher and Kurt Johnsen (Editors).  Southern Research Station General Technical Report SRS-75." },
  { title: "Site preparation burning to improve Southern Appalachian pine-hardwood stands: fire characteristics and soil erosion, moisture and temperature", authors: "wift, Lloyd W., Jr.; Elliot, Katherine J.; Ottmar, Roger D.; Vihnanek, Robert E.", year: "1993", citation: "Swift, Lloyd W., Jr.; Elliot, Katherine J.; Ottmar, Roger D.; Vihnanek, Robert E. 1993. Site preparation burning to improve Southern Appalachian pine-hardwood stands: fire characteristics and soil erosion, moisture and temperature. Canadian Journal of Forest Research. 23 (1993): 2242–2254." },
  { title: "Water stress projections for the northeastern and midwestern United States in 2060: Anthropogenic and ecological consequences", authors: "Tavernia, B.G., Nelson, M.D., Caldwell, P. and Sun, G.", year: "2013", citation: "Tavernia, B.G., Nelson, M.D., Caldwell, P. and Sun, G., 2013. Water stress projections for the northeastern and midwestern United States in 2060: Anthropogenic and ecological consequences. JAWRA Journal of the American Water Resources Association, 49(4), pp.938-952." },
  { title: "Sediment and nutrient export in runoff from burned and harvested pine watersheds in the South Carolina Piedmont", authors: "Van Lear, D.H.; Douglass, J.E.; Cox, S.K.; Augspuger, M.K.", year: "1985", citation: "Van Lear, D.H.; Douglass, J.E.; Cox, S.K.; Augspuger, M.K.1985. Sediment and nutrient export in runoff from burned and harvested pine watersheds in the South Carolina Piedmont. Journal of Environmental Quality. 14: 169–17." },
  { title: "Fire and Forests in the 21st Century: Managing Resilience Under Changing Climates and Fire Regimes in USA Forests", authors: "Vose JM, Peterson DL, Fettig CJ et al", year: "2021", citation: "Vose JM, Peterson DL, Fettig CJ et al (2021) Fire and Forests in the 21st Century: Managing Resilience Under Changing Climates and Fire Regimes in USA Forests. In: Greenberg C. H. andCollins B. (eds), Fire Ecology and Management: Past, Present, and Future of US Forested Ecosystems. Springer Cham, pp. 465-502" },
  { title: "Importance of subsurface water for hydrological response during storms in a post-wildfire bedrock landscape", authors: "Atwood, A., Hille, M., Clark, M.K., Rengers, F., Ntarlagiannis, D., Townsend, K. and West, A.J.", year: "2023", citation: "Atwood, A., Hille, M., Clark, M.K., Rengers, F., Ntarlagiannis, D., Townsend, K. and West, A.J., 2023. Importance of subsurface water for hydrological response during storms in a post-wildfire bedrock landscape. Nature communications, 14(1), p.3814." },
]

@Component({
  selector: 'app-resources-references',
  templateUrl: './resources-references.component.html',
  styleUrls: ['./resources-references.component.css'],
})

export class ResourcesReferencesComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'authors', 'year', 'citation'];
  dataSource = new MatTableDataSource<Reference>(ELEMENT_DATA);;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}